import Link from "next/link";
import styles from "../page.module.css"
export default function About() {
	return (
		<div className={styles.main}>
			<p>This is the about page</p>
			<Link  href={"/"}>Go to the home page</Link>
		</div>
	)
}
