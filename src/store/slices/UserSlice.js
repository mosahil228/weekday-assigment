import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        setUser: [],
    },
    reducers: {
        setHeight: (state, action) => {
            if (state.showHeight === "show-height") {
                state.showHeight = "hide-height";

            } else {
                state.showHeight = "show-height";
            };

        },
        setRotate: (state, action) => {
            if (state.rotate === "rotate-180") {
                state.rotate = "rotate-360";
            } else {
                state.rotate = "rotate-180";
            };
        },
        setUserData: (state, action) => {
            state.setUser[0] = (action.payload)
        },
        deleteUserData: (state, action) => {
            state.setUser = action.payload;
        },
        setEnrollStatus: (state, action) => {
            state.enrollStatus = action.payload;
        },
        setCourseData: (state, action) => {
            state.courseData = action.payload;
        },
        setCourseDataInfo: (state, action) => {
            state.courseDataInfo = action.payload;
        },
        setEnrollCourse: (state, action) => {
           state.enrollCourse.push(action.payload)
        },
        setComplete: (state, action) => {
            state.complete = action.payload;
        },
        setBoolean: (state, action) => {
            state.booleanBox = action.payload;
        },
        setAllCourses: (state, action) => {
            state.allCourses = action.payload;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },

    }
})
export default userSlice.reducer;
export const { setHeight, setRotate, setUserData, deleteUserData, setEnrollStatus, setCourseData, setCourseDataInfo, setEnrollCourse, setComplete, setBoolean ,setAllCourses,setQuery,setDarkMode,setUrl} = userSlice.actions;