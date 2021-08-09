import React, { useState, useEffect } from 'react'
import './Path.css'

// Services
import {
  getAllPaths,
  getPathById
} from '../../services/pathService'


// Components
import Skill from '../../components/Skill/Skill'
import SkillCard from '../../components/SkillCard/SkillCard'
import PathCard from '../../components/PathCard/PathCard'


const Path = (props) => {
  // useStates
  


  // methods


  //update useEffect to see our loading animation
//   useEffect(() => {
//     const fetchPost = async () => {
//         try {
//             const post = await getPathById(id)
//             setTimeout(() => {
//                 // setPath(path)
//                 // setCommentArray(post.comments)
//             }, 1000)
//         } catch (error) {
//             throw error
//         }
//     }
//     fetchPost()
//     return () => { setPath(null) }
// }, [id])

  return (
    <div className="path">
      <Skill 
      skillName=
      parentPath=
      milestones=
      />
      <SkillCard />
    </div>
  )
}

export default Path