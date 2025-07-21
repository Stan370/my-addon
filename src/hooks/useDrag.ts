import { useEffect } from "react";

export function useDraggableToExpress(
  addOnUISdk: any,
  elementId: string,
  previewUrl: string
) {
  useEffect(() => {
    if (!addOnUISdk || !elementId || !previewUrl) return;

    const image = document.getElementById(elementId);
    if (!image) return;

    const dragCallbacks = {
      previewCallback: () => new URL(previewUrl),
      completionCallback: async () => {
        const imageBlob = await fetch(previewUrl).then((r) => r.blob());
        return [{ blob: imageBlob }];
      },
    };

    try {
      addOnUISdk.app.enableDragToDocument(image, dragCallbacks);
    } catch (error) {
      console.log("Failed to enable DragToDocument:", error);
    }

    // Optional: cleanup
    return () => {
      // addOnUISdk.app.disableDragToDocument(image); // if available
    };
  }, [addOnUISdk, elementId, previewUrl]);
}