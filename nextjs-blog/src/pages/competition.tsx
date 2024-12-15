import Card from "../components/card";

const Competition = () => {
  // 卡片內容資料
  const cardData = [
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+1",
      title: "Competition 1",
      description: "Description for competition 1.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+2",
      title: "Competition 2",
      description: "Description for competition 2.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+3",
      title: "Competition 3",
      description: "Description for competition 3.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+4",
      title: "Competition 4",
      description: "Description for competition 4.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+5",
      title: "Competition 5",
      description: "Description for competition 5.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+6",
      title: "Competition 6",
      description: "Description for competition 6.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+7",
      title: "Competition 7",
      description: "Description for competition 7.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+8",
      title: "Competition 8",
      description: "Description for competition 8.",
    },
    {
      imageSrc: "https://via.placeholder.com/520x220?text=Image+9",
      title: "Competition 9",
      description: "Description for competition 9.",
    },
  ];

  return (
    <div style={styles.container}>
      {/* 根據資料動態渲染卡片 */}
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid", // 使用 CSS Grid 佈局
    gridTemplateColumns: "repeat(3, 1fr)", // 固定每行 3 列
    gap: "20px", // 卡片之間的間距
    justifyContent: "center", // 置中對齊
    padding: "20px", // 整個容器的內邊距
  },
};

export default Competition;
