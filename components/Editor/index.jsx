import SunEditor from 'suneditor-react'

const Editor = ({ setContent, height, initialValue }) => {
  const handleChange = content => {
    setContent(content)
  }

  return (
    <div suppressContentEditableWarning={true}>
      <SunEditor
        setContents={initialValue}
        onChange={handleChange}
        setOptions={{
          height: height,
          buttonList: [
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "list",
              "align",
              "fontSize",
              "formatBlock",
              "table",
              "image"
            ]
          ]
        }}
      />
    </div>
  )
}

export default Editor
