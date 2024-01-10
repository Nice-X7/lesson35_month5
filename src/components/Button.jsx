export const Button = ({index, item, setBought}) => {

  return (
    <div className='card-button'>
      {
        item.bought ? (<button className="btn" disabled>Добавлено в корзину</button>)
        : (<button className='btn' onClick={() => setBought(index)}>Добавить в карзину</button>)
      }
    </div>
  );
}