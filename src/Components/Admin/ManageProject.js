import React from 'react';
import { useState,useEffect } from 'react';
const ManageProject = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({
        imgSrc: '',
        altText: '',
        projectLink: '',
        projectName: ''
    });

    // Load saved projects from localStorage
    useEffect(() => {
        const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(savedProjects);
    }, []);

    // Handle adding a new project to the list
    const handleAddProject = () => {
        const updatedProjects = [...projects, newProject];
        setProjects(updatedProjects);
        localStorage.setItem('projects', JSON.stringify(updatedProjects));

        // Reset form fields
        setNewProject({ imgSrc: '', altText: '', projectLink: '', projectName: '' });
    };

    console.log(projects);

    return (
        <div className='border-1 border-slate-500 m-auto p-4 flex flex-col h-screen mt-4 mb-4  gap-2 w-1/2'>
            <label className='text-xl font-bold text-left text-blue-500'>Image Src</label>
            <input
                value={newProject.imgSrc}
                type="text"
                placeholder="Enter img src"
                onChange={(e) => setNewProject({ ...newProject, imgSrc: e.target.value })}
                className='border-1 border-slate-600 rounded-md p-1 '
            /> 

<label className='text-xl font-bold text-left text-blue-500'>Alt Text</label>
            <input
                value={newProject.altText}
                type="text" 
                placeholder="Enter altText"
                onChange={(e) => setNewProject({ ...newProject, altText: e.target.value })}
                className='border-1 border-slate-600 rounded-md p-1 '

            />

            <label className='text-xl font-bold text-left text-blue-500'>Project Link</label>
            <input
                value={newProject.projectLink}
                type="text"
                placeholder="Enter Project Link"
                onChange={(e) => setNewProject({ ...newProject, projectLink: e.target.value })}
                className='border-1 border-slate-600 rounded-md p-1 '

            />

<label className='text-xl font-bold text-left text-blue-500'>Project Name</label>
            <input
                value={newProject.projectName}
                type="text"
                placeholder="Project Name"
                onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
                                className='border-1 border-slate-600 rounded-md p-1 '

            />

            <button onClick={handleAddProject} className=' w-28 m-auto border-1 border-slate-800 p-2 rounded-md bg-blue-400 hover:bg-blue-600'>Add Project</button>
        </div>
    );
};

export default ManageProject;
