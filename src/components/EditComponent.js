import ReactQuill from 'react-quill';
import React, { useState } from "react";
const EditComponent = ({ readOnly }) => {
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
    const [value, setValue] = useState('<h3><strong>Default initial value</strong></h3>');
    const onBlur = (previousRange, source, editor) => setValue(editor.getHTML());
    const getClassName = () => readOnly ? 'read-only' : '';
    const getModules = () => readOnly ? readOnlyModules : modules;
    const onFocus = (range, source, editor) => getModules();
    return (
        <div className="quill-component">
            <ReactQuill theme="snow"
                readOnly={readOnly}
                className={getClassName()}
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