import ReactMarkdown from 'react-markdown'
import markdown from 'raw-loader!./about.md';


export default function About() {
    return (
        <ReactMarkdown children={markdown} />
    );
}
