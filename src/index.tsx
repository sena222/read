import ReactDOM from 'react-dom';
import Reader from 'containers/Reader'

const EPUB_URL = "/react-epub-viewer/files/Alices ventures in Wonderland.epub";

ReactDOM.render(<Reader url={EPUB_URL} />,  document.getElementById('root'));
