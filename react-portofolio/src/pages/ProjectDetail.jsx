import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import {sampleProjectsState} from '../sampleProjectsState';

export default function ProjectDetail() {
    const history=useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(sampleProjectState);
    const [state, setProject] = useState(null);
    useEffect (() => {
        const currentProject = projects.filter((stateProject) => stateProject.url ===url);
        setProject(currentProject);
    }, [projects,url]);



    return (
        <div>
            <h1>ProjectDetail</h1>
        </div>
    )
}
