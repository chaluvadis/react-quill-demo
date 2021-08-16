import ReactQuill from 'react-quill';
import React, { useState } from "react";
const EditComponent = ({ readOnly, htmlValue }) => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
        ],
    };
    const readOnlyModules = { toolbar: false };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'color', 'background'
    ];
    const [value, setValue] = useState(htmlValue);
    const [defaultModules, setDefaultMoules] = useState(readOnlyModules);
    const [foucs, setFocus] = useState(false);
    const [cssClass, setCssClass] = useState();
    const getClassName = () => readOnly ? 'read-only' : '';
    const onBlur = (previousRange, source, editor) => {
        setValue(editor.getHTML());
        setFocus(false);
        setCssClass(getClassName());
    };
    const getModules = () => foucs ? modules : readOnlyModules;
    const onFocus = (range, source, editor) => {
        setDefaultMoules(getModules());
        setFocus(true);
        setCssClass('');
    };
    return (
        <div className="quill-component">
            <ReactQuill theme="snow"
                readOnly={readOnly}
                className={cssClass}
                value={value}
                modules={getModules()}
                formats={formats}
                defaultValue={value}
                onBlur={onBlur}
                onFocus={onFocus} />
        </div>
    );
};

export default EditComponent;