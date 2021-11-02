import "./PreviewItem.css";
import NavigationBar from "./NavigationBar";

const PreviewItem = () => {
    return (
        <div className="preview-container">
            <NavigationBar />
            <button className="primary">Button Primary</button>
            <button className="secondary">Button Secondary</button>
            <button className="tertiary">Button Tertiary</button>
            <br />
            <button className="primary outline">Button Primary</button>
            <button className="secondary outline">Button Secondary</button>
            <button className="tertiary outline">Button Tertiary</button>
        </div>
    );
}

export default PreviewItem;