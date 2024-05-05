import React from 'react'
import RolesButton from './filterButtons/RolesButton'
import Location from './filterButtons/Location'
import Salary from './filterButtons/Salary'
import NEmployess from './filterButtons/NEmployees'
import JobType from './filterButtons/JobType'
import Experience from './filterButtons/Experience'
import Company from './filterButtons/Company'

const FilterSection = () => {
    return (
        <div className='filter-section'>
            <div className='filter'>
                <RolesButton />
                <NEmployess />
                <Experience/>
                <JobType />
                <Company />
                <Salary />
                <Location/>
            </div>

        </div>
    )
}

export default FilterSection