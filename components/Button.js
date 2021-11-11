// Import Modules

// Import Styles
import styles from 'styles/components/Button.module.scss'

// Content
export default function Container(p) {
    const type = p.type;
    const variant = p.variant;

    let ButtonItem
    if (variant === "Block") {
        ButtonItem = (
            <button className={styles.Block}>
                {p.text}
            </button>
        ) 
    }
    else {
        ButtonItem = (
            <button type={type}>
                {p.text}
            </button>
        )
    }
    return (
        [ButtonItem]
    )
}