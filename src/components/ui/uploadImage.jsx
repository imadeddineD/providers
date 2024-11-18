import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";

// Ensure you include Cloudinary's JavaScript library in your `index.html` (public folder) for Vite:
// Add this in your `public/index.html` file inside the <head> tag
// <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>

const ImageUpload = ({ disabled, onChange, onRemove, value , lng }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleUpload = () => {
    // Ensure that cloudinary is available globally
    if (window.cloudinary) {
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "your-cloud-name", // Replace with your Cloudinary cloud name
          uploadPreset: "your-upload-preset", // Replace with your preset
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            onChange(result.info.secure_url);
          }
        }
      );
      myWidget.open(); // Open the widget
    } else {
      console.error("Cloudinary widget not found");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value?.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            {/* Using img tag instead of Next.js Image component */}
            <img
              src={url}
              alt="Uploaded"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <Button
        type="button"
        disabled={disabled}
        variant="secondary"
        onClick={handleUpload}
        className="bg-slate-300"
      >
        <ImagePlus className="h-4 w-4 mr-2" />
       {`${lng === "en" ? "Upload Image" : " إرفع صورة"}`}
      </Button>
    </div>
  );
};

export default ImageUpload;
