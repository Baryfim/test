// styles
import classes from "./post.module.css"

const Post = ({mt, username, text, src}) => {
    return (
        <div style={{marginTop: mt}} className={classes.PostBlock}>
            <div className={classes.HeaderPost}>
                <div className={classes.Avatar}>
                    <div className={classes.AvatarInner}></div>
                </div>
                <h2>{username}</h2>
            </div>
            <video className={classes.gallery__item} controls>
				<source src={src} type="video/mp4" /> 
			</video>
            <div className={classes.Description}>
                <p className={classes.DescriptionContent}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Post