import dynamic from 'next/dynamic'
import Card from 'react-bootstrap/Card'

const Editor = dynamic(import('components/Editor'), { ssr: false })

const Notes = ({ value, setContent }) => {
  return (
    <>
      <Card className="mx-auto w-100 rounded-0 border-0 shadow-lg">
        <Editor 
          initialValue={value}
          setContent={setContent} 
          height="200"
        />
      </Card>
      <style jsx>{`
      :global(.sun-editor .se-wrapper){
        height: 175px;
        overflow-y: scroll;
      }
      `}</style>
    </>
  )
}

export default Notes
