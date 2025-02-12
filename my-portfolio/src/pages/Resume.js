import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf"; // Correct import
import "pdfjs-dist/build/pdf.worker"; // Worker import
import "../styles/resume.css";
import resume from '../assets/ResumeEng.pdf';

function Resume() {
    const canvasRef = useRef(null);

    useEffect(() => {
        let renderTask = null; // Store render task to cancel if needed

        const renderPDF = async () => {
            pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
                "pdfjs-dist/build/pdf.worker.min.mjs",
                import.meta.url
            ).toString();

            const loadingTask = pdfjsLib.getDocument(resume);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 1.5 });

            const canvas = canvasRef.current;
            if (!canvas) return; // Ensure canvas is available

            const context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };

            renderTask = page.render(renderContext);

            try {
                await renderTask.promise; // Wait for rendering to finish
            } catch (error) {
                console.warn("Rendering cancelled:", error);
            }
        };

        renderPDF();

        // Cleanup function: Cancel rendering if component unmounts or updates
        return () => {
            if (renderTask) {
                renderTask.cancel();
            }
        };
    }, []);

    return (
        <div className="resume-container">
            <br></br><br></br>
             <a href={resume} download className="download-btn">
                Download CV
            </a>
            <br></br><br></br>

            {/* Resume as an Image */}
            <canvas ref={canvasRef} className="resume-canvas"></canvas>
            <br></br><br></br>
            {/* Download Button */}
            <a href={resume} download className="download-btn">
                Download CV
            </a>
        </div>
    );
}

export default Resume;
