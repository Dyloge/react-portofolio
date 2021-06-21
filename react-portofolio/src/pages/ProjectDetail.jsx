import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import {sampleProjectsState} from '../sampleProjectsState';

export default function ProjectDetail() {
    const history=useHistory();
    const url = history.location.pathname;
    const [project, setProject] = useState(sampleProjectState)
    return (
        <div>
            <h1>ProjectDetail</h1>
        </div>
    )
}
