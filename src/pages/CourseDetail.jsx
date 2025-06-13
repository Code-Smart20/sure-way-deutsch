import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Course Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Course details will be implemented later */}
        <p>Course details for ID: {id} coming soon...</p>
      </div>
    </div>
  )
}

export default CourseDetail