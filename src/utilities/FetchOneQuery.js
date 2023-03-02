import useFetchAllQuery from "./FetchAllQuery";

const useFetchOneQuery = ({props}) =>{

    props.dataState = useFetchAllQuery(`http://localhost:3000/`+props.resource+`/`+props.id)
    return props.dataState;

}

export default useFetchOneQuery