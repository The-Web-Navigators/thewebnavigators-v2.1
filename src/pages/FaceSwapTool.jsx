import React, { useState } from "react";
import { motion } from 'framer-motion';
import { AnimatedGradientTextComponent } from '../components/react/AnimatedGradientTextComponent';

const FaceSwapTool = () => {
    const [targetImage, setTargetImage] = useState(null);
    const [sourceImage, setSourceImage] = useState(null);
    const [resultImageUrl, setResultImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result.split(",")[1]); // Extract Base64 data
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFaceSwap = async () => {
        if (!targetImage || !sourceImage) {
            alert("Please upload both images before swapping.");
            return;
        }

        setLoading(true);

        const url =
            "https://faceswap-image-transformation-api.p.rapidapi.com/faceswapbase64";
        const options = {
            method: "POST",
            headers: {
                "x-rapidapi-key": "f8bef181aemsha0a3b9003e00e4fp1a8db0jsna676ef08463e",
                "x-rapidapi-host": "faceswap-image-transformation-api.p.rapidapi.com",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                TargetImageBase64Data: targetImage,
                SourceImageBase64Data: sourceImage,
            }),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("API Response:", result);

            if (result.Success) {
                setResultImageUrl(result.ResultImageUrl);
            } else {
                console.error("Face swap failed:", result.Message);
                alert("Face swap failed: " + result.Message);
            }
        } catch (error) {
            console.error("Error during API call:", error);
            alert("An error occurred during face swapping.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative pt-32 mx-auto h-screen px-6 xl:px-0 flex flex-col items-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
                <AnimatedGradientTextComponent text="By The Web Navigators" />
            </motion.div>
            <motion.h1
                className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 text-5xl font-medium leading-none tracking-tighter text-transparent text-center sm:text-6xl md:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
                AI-Powered
                <br className="hidden md:block" />{" "}
                Face Swap Tool
            </motion.h1>
            <motion.p
                className="text-lg tracking-tight text-gray-400 md:text-xl text-balance text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
                Upload two images to swap faces seamlessly!
            </motion.p>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex flex-col items-center">
                    <label className="mb-2 font-semibold">Target Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, setTargetImage)}
                        className="bg-white shadow rounded px-4 py-2"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <label className="mb-2 font-semibold">Source Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, setSourceImage)}
                        className="bg-white shadow rounded px-4 py-2"
                    />
                </div>
            </div>

            <button
                onClick={handleFaceSwap}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition"
                disabled={loading}
            >
                {loading ? "Swapping Faces..." : "Swap Faces"}
            </button>

            {resultImageUrl && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Result:
                    </h2>
                    <img
                        src={resultImageUrl}
                        alt="Swapped Faces Result"
                        className="w-80 h-auto rounded shadow"
                    />
                </div>
            )}
        </div>
    );
};

export default FaceSwapTool;
