import React from "react";

interface CardProps {
  imageSrc?: string; // 圖片的 URL，可選
  imageComponent?: React.ReactNode; // 自訂圖片的 React 元件，可選
  title?: string; // 可自訂標題
  description?: string; // 可自訂描述
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageComponent,
  title = "Default Title",
  description = "Default Description",
}) => {
  return (
    <div style={styles.cardContainer}>
      {/* 圖片區域 */}
      <div style={styles.imageWrapper}>
        {imageComponent ? (
          imageComponent // 使用自訂的 React 元件
        ) : imageSrc ? (
          <img src={imageSrc} alt="Card Image" style={styles.image} />
        ) : (
          // 預設的占位符
          <svg
            preserveAspectRatio="none"
            width="520"
            height="220"
            viewBox="0 0 520 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="520" height="220" fill="#DDE1E6" />
          </svg>
        )}
      </div>

      {/* 文字區域 */}
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>

      {/* 更多資訊按鈕 */}
      <div style={styles.moreInfoContainer}>
        <div style={styles.moreInfoText}>More Info</div>
        <div style={styles.arrowIcon}>
          <svg
            preserveAspectRatio="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.586 10.657L11.636 6.70698C11.4538 6.51838 11.353 6.26578 11.3553 6.00358C11.3576 5.74138 11.4628 5.49057 11.6482 5.30516C11.8336 5.11975 12.0844 5.01458 12.3466 5.01231C12.6088 5.01003 12.8614 5.11082 13.05 5.29298L18.707 10.95C18.8002 11.0426 18.8741 11.1528 18.9246 11.2741C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9185 18.9246 12.0398C18.8741 12.1612 18.8002 12.2713 18.707 12.364L13.05 18.021C12.9578 18.1165 12.8474 18.1927 12.7254 18.2451C12.6034 18.2975 12.4722 18.3251 12.3394 18.3262C12.2066 18.3274 12.0749 18.3021 11.952 18.2518C11.8291 18.2015 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4504 11.3307 17.3176C11.3319 17.1848 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6992 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5516 5.29289 12.3641C5.10536 12.1766 5 11.9222 5 11.657C5 11.3918 5.10536 11.1374 5.29289 10.9499C5.48043 10.7623 5.73478 10.657 6 10.657H15.586Z"
              fill="#0F62FE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    overflow: "hidden",
    textAlign: "left",
  },
  imageWrapper: {
    borderRadius: "8px 8px 0 0",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  textContainer: {
    padding: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "16px 0 8px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "16px",
  },
  moreInfoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  moreInfoText: {
    color: "#0F62FE",
    fontSize: "14px",
  },
  arrowIcon: {
    marginLeft: "8px",
  },
};

export default Card;
