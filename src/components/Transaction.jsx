const Transaction = ({givenTransaction}) => {
    console.log(givenTransaction);
    
    return ( 
        <ul>
            <li>{ givenTransaction.user }</li>
            <li>{ givenTransaction.date }</li>
            <li>{ givenTransaction.cost }</li>
        </ul>
  
     );
}
 
export default Transaction;