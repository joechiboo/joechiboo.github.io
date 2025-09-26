import { computed } from 'vue'

export function useTimeDisplay() {
  const getRelativeTimeDisplay = (dateString) => {
    if (!dateString) return null

    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays <= 1) {
      return 'TODAY'
    } else if (diffDays <= 7) {
      return 'this week'
    } else if (diffDays <= 30) {
      return 'this month'
    } else if (diffDays <= 90) {
      return 'this season'
    }

    return null
  }

  return {
    getRelativeTimeDisplay
  }
}