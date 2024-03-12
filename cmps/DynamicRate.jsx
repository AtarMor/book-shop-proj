export function DynamicRate({ rateBy }) {
    switch (rateBy) {
        case 'select':
            return <SelectInput />
        case 'textbox':
            return <TextboxInput />
    }
}

function SelectInput() {
    return <React.Fragment>
        <label htmlFor="rating">Rating:</label>
        <select
            id="rating"
            name="rating"
        >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </React.Fragment>
}

function TextboxInput() {
    return <React.Fragment>
        <label htmlFor="rating">Rating:</label>
        <input
            type="number"
            id="rating"
            placeholder="rating (0-5)"
            min="0"
            max="5"
            name="rating"
        />
    </React.Fragment>
}