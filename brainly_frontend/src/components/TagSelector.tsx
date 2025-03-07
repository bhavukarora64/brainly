import { useState } from "react";

export default function TagSelector() {
    // Step 1: List of available tags
    const availableTags = ["React", "Node.js", "Tailwind", "DevOps", "Azure"];

    // Step 2: State to store selected tags
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Step 3: Function to toggle tag selection
    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            // If already selected, remove it
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            // If not selected, add it
            setSelectedTags([...selectedTags, tag]);
        }
    };

    // Step 4: Function to submit selected tags
    const handleSubmit = () => {
        console.log("Selected Tags:", selectedTags);
        // Here you can send selectedTags to the backend using an API
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Select Tags:</h2>
            
            {/* Step 5: Display the tags */}
            <div className="flex flex-wrap gap-2">
                {availableTags.map(tag => (
                    <span
                        key={tag}
                        onClick={() => toggleTag(tag)}  // Click to select/deselect
                        className={`px-3 py-1 rounded cursor-pointer transition 
                            ${selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200"}
                        `}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Step 6: Submit button */}
            <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Submit
            </button>
        </div>
    );
}
