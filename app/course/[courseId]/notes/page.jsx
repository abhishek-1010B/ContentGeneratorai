"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ViewNotes() {
  const { courseId } = useParams();
  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "notes",
      });

      console.log("Fetched Notes:", result?.data); // Log the entire response

      const parsedNotes = result?.data?.notes.map((note) => {
        try {
          return {
            ...note,
            notes: JSON.parse(note.notes), // Parse the notes field to handle as an object
          };
        } catch (error) {
          console.error("Error parsing notes:", error);
          return note;
        }
      });

      setNotes(parsedNotes || []);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Check if notes are available
  if (notes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render each note */}
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.notes?.chapterTitle}</h3>
          <p>{note.notes?.chapterSummary}</p>
          {note.notes?.topics && (
            <div>
              {note.notes.topics.map((topic, idx) => (
                <div key={idx}>
                  <h4>{topic}</h4>
                  {/* You can render the content for each topic here */}
                  <p>{note.notes.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ViewNotes;

// "use client";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { useParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";

// function ViewNotes() {
//   const { courseId } = useParams();
//   const [notes, setNotes] = useState([]);
//   const [stepCount, setStepCount] = useState(0);
//   const router = useRouter();

//   useEffect(() => {
//     GetNotes();
//   }, []);

//   const GetNotes = async () => {
//     try {
//       const result = await axios.post("/api/study-type", {
//         courseId: courseId,
//         studyType: "notes",
//       });

//       console.log("API Response:", result.data);
//       setNotes(result?.data?.notes || []); // Adjust based on response structure
//     } catch (error) {
//       console.error("Failed to fetch notes:", error);
//     }
//   };

//   if (!Array.isArray(notes)) {
//     return <div>No notes available</div>;
//   }

//   return notes.length > 0 ? (
//     <div>
//       <div className="flex gap-5 items-center">
//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() => setStepCount((prev) => Math.max(prev - 1, 0))}
//         >
//           Previous
//         </Button>
//         {notes.map((_, index) => (
//           <div
//             key={index}
//             className={`w-full h-2 rounded-full ${
//               index < stepCount ? "bg-primary" : "bg-gray-200"
//             }`}
//           ></div>
//         ))}
//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() =>
//             setStepCount((prev) => Math.min(prev + 1, notes.length - 1))
//           }
//         >
//           Next
//         </Button>
//       </div>

//       <div className="mt-10">
//         <div
//           dangerouslySetInnerHTML={{ __html: notes[stepCount]?.notes || "" }}
//         />

//         {stepCount === notes.length - 1 && (
//           <div className="flex items-center gap-10 flex-col justify-center">
//             <h2>End of notes</h2>
//             <Button onClick={() => router.back()}>Go to course page</Button>
//           </div>
//         )}
//       </div>
//     </div>
//   ) : (
//     <div>No notes available</div>
//   );
// }

// export default ViewNotes;
