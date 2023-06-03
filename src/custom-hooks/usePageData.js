import React, { useEffect, useState } from 'react'
import firebase from "../utils/fb-config";

export const usePageData = ( fieldName ) => {


    const [data, setData] = useState(null);

    useEffect(() => {
        firebase
            .database()
            .ref()
            .child(`${fieldName}`)
            .once("value")
            .then((data) => setData(data.val()));
    }, [fieldName]);
    return data
}
