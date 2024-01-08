export const Button = ({index, data, setData, item}) => {

    // Add to Basket
    const setBought = (ind) => {
      const addToBasket = data.map((item) => {
          if(ind === item.id) {
            return {
              ...item,
              bought: !item.bought
            }
          } else {
            return item
          }
      })
      setData(addToBasket)
    }




    console.log(data);

  return (
    <div className='card-button'>

      {
        item.bought ? (
          <button className="btn" disabled>Добавлено в корзину</button>
        ) : (
          <button className='btn' onClick={() => setBought(index)}>Добавить в карзину</button>
        )
      }
      
    </div>
  );
}