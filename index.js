class ToothpickerColor {
    constructor(initialColor) {
      this.color = initialColor || '#ffffff'; // Default color is white if not provided
      this.onColorChangeCallbacks = [];
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(newColor) {
      this.color = newColor;
      this.notifyColorChange();
    }
  
    subscribeToColorChange(callback) {
      this.onColorChangeCallbacks.push(callback);
    }
  
    unsubscribeFromColorChange(callback) {
      this.onColorChangeCallbacks = this.onColorChangeCallbacks.filter(cb => cb !== callback);
    }
  
    notifyColorChange() {
      this.onColorChangeCallbacks.forEach(callback => callback(this.color));
    }
  }
  
  // Example usage
  const toothpicker = new ToothpickerColor('#ffcc00');
  
  toothpicker.subscribeToColorChange(newColor => {
    console.log(`Color changed to: ${newColor}`);
  });
  
  toothpicker.setColor('#00aaff');
  