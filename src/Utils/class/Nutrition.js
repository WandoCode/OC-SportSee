class Nutrition {
  constructor(rawNutritionData) {
    this.rawData = rawNutritionData
    this.formattedData = this.getFormattedNutrition()
  }

  /**
   * Format nutrition information recieved from API
   * @function
   * @return {Nutrition} Nutritional informations
   */
  getFormattedNutrition = () => {
    return {
      calorieCount: this.formatNumber(this.rawData.calorieCount),
      proteinCount: this.formatNumber(this.rawData.proteinCount),
      carbohydrateCount: this.formatNumber(this.rawData.carbohydrateCount),
      lipidCount: this.formatNumber(this.rawData.lipidCount),
    }
  }

  /**
   * Add a comma as thousand separator
   * @function
   * @param {number} num The number to format
   * @returns {string} The number as a string with the separator if needed
   */
  formatNumber = (num) => {
    const strNum = String(num)
    if (strNum.length > 3) {
      return strNum.slice(0, 1).concat(',', strNum.slice(1))
    } else {
      return strNum
    }
  }
}

export default Nutrition

/**
 *  @typedef {Object} Nutrition
 * Nutrition informations about the user
 * @property {string} calorieCount Amount of calory
 * @property {string} proteinCount Amount of protein
 * @property {string} carbohydrateCount Amount of carbohydrate
 * @property {string} lipidCount Amount of lipid
 */
