import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { BallCanvas } from "./canvas"
import {textVariant} from '../utils/motion'

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Tech Stacks</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, '')