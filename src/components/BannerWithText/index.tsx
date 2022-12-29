import './styles.css'

export type BannerWithTextProps = {
  urlImage: string
  centerText?: string
  topLeftText?: string
  topRightText?: string
  bottomLeftText?: string
  bottomRightText?: string
}

const BannerWithText = ({
  urlImage,
  centerText,
  topLeftText,
  topRightText,
  bottomLeftText,
  bottomRightText,
}: BannerWithTextProps) => (
  <div className='container'>
    <img src={urlImage} alt='Banner' />
    <div className='centerText'>{centerText}</div>
    <div className='topLeftText'>{topLeftText}</div>
    <div className='topRightText'>{topRightText}</div>
    <div className='bottomLeftText'>{bottomLeftText}</div>
    <div className='bottomRightText'>{bottomRightText}</div>
  </div>
)

export default BannerWithText