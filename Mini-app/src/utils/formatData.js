export const formatDate = (dateString) => {
    const optionsDate = { month: 'short', day: '2-digit', year: 'numeric' };
    const optionsTime = { hour: 'numeric', minute: '2-digit', hour12: true };
  
    const date = new Date(dateString.replace(" ", "T"));
  
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
  
    return `${formattedDate} at ${formattedTime}`;
  };