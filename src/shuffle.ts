export const shuffle = (input: string[]) => { 
    const output = [...input];
    for (let i = output.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [output[i], output[j]] = [output[j], output[i]]; 
    } 
    return output; 
  }; 