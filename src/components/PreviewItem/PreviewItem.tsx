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
            <br />
            <input className="primary" type="text" name="" id="" placeholder="Primary" />
            <input className="secondary" type="text" name="" id="" placeholder="Secondary" />
            <input className="tertiary" type="text" name="" id="" placeholder="Tertiary" />
            <br />
            <input type="checkbox" name="" id="" value="primary" />
            <label htmlFor="primary">Primary</label>
            <input type="checkbox" name="" id="" value="secondary" />
            <label htmlFor="secondary">Secondary</label>
            <input type="checkbox" name="" id="" value="tertiary" />
            <label htmlFor="tertiary">Tertiary</label>
            <br />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
        </div>
    );
}

export default PreviewItem;