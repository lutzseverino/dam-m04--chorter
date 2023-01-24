import ReactMarkdown from 'react-markdown'
import markdown from 'raw-loader!./policy.md';


export default function Policy() {
    return (
        <ReactMarkdown children={markdown} />
    );
}