import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
} from "motion/react";
import {
    ChevronLeft,
    ChevronRight,
    X,
    ZoomIn,
} from "lucide-react";

export interface GalleryImage {
    src: string;
    alt: string;
}

interface ImageInspectionGalleryProps {
    images: GalleryImage[];
    renderGallery?: (openImage: (index: number) => void) => ReactNode;
}

const LENS_SIZE = 224;
const MAGNIFICATION = 2.2;

function InspectionImage({ image }: { image: GalleryImage }) {
    const imageRef = useRef<HTMLImageElement>(null);
    const touchDragActive = useRef(false);
    const [inspectionPoint, setInspectionPoint] = useState<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>(null);
    const lensX = useSpring(useMotionValue(0), {
        damping: 32,
        stiffness: 280,
    });
    const lensY = useSpring(useMotionValue(0), {
        damping: 32,
        stiffness: 280,
    });

    const updateInspectionPoint = (
        clientX: number,
        clientY: number,
    ) => {
        const imageElement = imageRef.current;
        if (!imageElement) return;

        const bounds = imageElement.getBoundingClientRect();
        const x = Math.min(Math.max(clientX - bounds.left, 0), bounds.width);
        const y = Math.min(Math.max(clientY - bounds.top, 0), bounds.height);

        lensX.set(x - LENS_SIZE / 2);
        lensY.set(y - LENS_SIZE / 2);
        setInspectionPoint({ x, y, width: bounds.width, height: bounds.height });
    };

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "touch") {
            touchDragActive.current = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            updateInspectionPoint(event.clientX, event.clientY);
        } else if (event.pointerType === "mouse") {
            updateInspectionPoint(event.clientX, event.clientY);
        }
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "mouse" || touchDragActive.current) {
            updateInspectionPoint(event.clientX, event.clientY);
        }
    };

    const handlePointerUp = () => {
        touchDragActive.current = false;
    };

    const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "mouse") {
            setInspectionPoint(null);
        }
    };

    return (
        <div
            className="relative inline-flex max-h-[78vh] max-w-full touch-none overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerLeave}
        >
            <img
                ref={imageRef}
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="h-auto max-h-[78vh] w-auto max-w-full select-none object-contain"
            />

            {inspectionPoint && (
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full border border-white/90 shadow-[0_8px_36px_rgba(0,0,0,0.45)]"
                    style={{
                        x: lensX,
                        y: lensY,
                        backgroundImage: `url("${image.src}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: `${inspectionPoint.width * MAGNIFICATION}px ${inspectionPoint.height * MAGNIFICATION}px`,
                        backgroundPosition: `${LENS_SIZE / 2 - inspectionPoint.x * MAGNIFICATION}px ${LENS_SIZE / 2 - inspectionPoint.y * MAGNIFICATION}px`,
                    }}
                />
            )}
        </div>
    );
}

export function ImageInspectionGallery({
    images,
    renderGallery,
}: ImageInspectionGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const isOpen = activeIndex !== null;
    const activeImage = activeIndex === null ? null : images[activeIndex];

    useEffect(() => {
        if (!isOpen) return;

        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setActiveIndex(null);
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                setActiveIndex((current) =>
                    current === null ? current : (current + 1) % images.length,
                );
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                setActiveIndex((current) =>
                    current === null
                        ? current
                        : (current - 1 + images.length) % images.length,
                );
            } else if (event.key === "Tab") {
                const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
                    'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
                );
                if (!focusable?.length) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
            if (previousFocus?.isConnected) previousFocus.focus();
        };
    }, [images.length, isOpen]);

    const openImage = (index: number) => setActiveIndex(index);

    return (
        <>
            {renderGallery ? (
                renderGallery(openImage)
            ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5% 0px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative overflow-hidden bg-neutral-100"
                        >
                            <button
                                type="button"
                                onClick={() => openImage(index)}
                                aria-label={`Inspect image: ${image.alt}`}
                                className="block aspect-[4/3] w-full overflow-hidden text-left"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() => openImage(index)}
                                aria-label={`Inspect image: ${image.alt}`}
                                title="Inspect image"
                                className="absolute bottom-4 right-4 inline-flex min-h-11 items-center gap-2 bg-black/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <ZoomIn size={16} strokeWidth={1.8} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            )}

            {createPortal(
                <AnimatePresence>
                    {isOpen && activeImage && (
                        <motion.div
                        key="image-inspection-overlay"
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 text-white backdrop-blur-sm md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) {
                                setActiveIndex(null);
                            }
                        }}
                    >
                        <div
                            ref={dialogRef}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="image-inspection-dialog-title"
                            className="relative flex h-full max-h-[900px] w-full max-w-[1440px] flex-col items-center justify-center"
                        >
                            <h2
                                id="image-inspection-dialog-title"
                                className="sr-only"
                            >
                                {activeImage.alt}
                            </h2>

                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={() => setActiveIndex(null)}
                                aria-label="Close image viewer"
                                className="absolute right-0 top-0 z-20 inline-flex h-12 w-12 items-center justify-center border border-white/20 bg-black/50 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <X size={21} strokeWidth={1.7} />
                            </button>

                            <div className="flex min-h-0 w-full flex-1 items-center justify-center px-10 py-14 md:px-20">
                                {images.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveIndex((current) =>
                                                current === null
                                                    ? current
                                                    : (current - 1 + images.length) % images.length,
                                            )
                                        }
                                        aria-label="View previous image"
                                        className="absolute left-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black/50 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-12 md:w-12"
                                    >
                                        <ChevronLeft size={22} strokeWidth={1.7} />
                                    </button>
                                )}

                                <InspectionImage
                                    key={activeImage.src}
                                    image={activeImage}
                                />

                                {images.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveIndex((current) =>
                                                current === null
                                                    ? current
                                                    : (current + 1) % images.length,
                                            )
                                        }
                                        aria-label="View next image"
                                        className="absolute right-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black/50 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-12 md:w-12"
                                    >
                                        <ChevronRight size={22} strokeWidth={1.7} />
                                    </button>
                                )}
                            </div>

                            <div className="flex w-full items-center justify-between gap-4 border-t border-white/15 pt-4 text-xs text-white/55">
                                <p className="min-w-0 truncate uppercase tracking-[0.14em]">
                                    {activeImage.alt}
                                </p>
                                <p className="shrink-0 tabular-nums">
                                    {String(activeIndex! + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                                </p>
                            </div>

                            <p className="mt-3 text-center text-xs text-white/40">
                                Move over or drag across the image to inspect
                                details.
                            </p>
                        </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body,
            )}
        </>
    );
}
