import '../styles/resets.css'
import '../styles/common.css'
import '../styles/iconfont.css'
import '../styles/ui.scss'
import '../styles/header.scss'
import '../styles/carousel.scss'
import '../styles/mainTitle.scss'
import '../styles/recomCourse.scss'
import '../styles/collection.scss'
import '../styles/courseItem.scss'
import '../styles/teacher.scss'
import '../styles/footer.scss'
import '../utils/init-polyfil'
import { CAROUSEL_CONFIG } from '../config/config'

import Carousel from '../modules/Carousel'
import HeaderSearch from '../modules/HeaderSearch'

new Carousel({ ...CAROUSEL_CONFIG }).init()
new HeaderSearch().init()
