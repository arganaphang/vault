//
//  Category.swift
//  Vault
//
//  Created by arga on 21/11/25.
//


enum Category: CaseIterable {
    case salary
    case bonus
    case interest
    case investment
    case gift
    case freelance
    
    case groceries
    case shopping
    case health
    case education
    case transport
    case bills
    case diningOut
    case entertainment
    case utilities
    case fuel
    case parking
    case travel
    case coffee
    case pets
    case charity
    
    var type: TransactionType {
        switch self {
        case .salary, .bonus, .interest, .investment, .gift, .freelance:
            return .income
        default:
            return .expense
        }
    }
    
    var iconName: String {
        switch self {
        // Income emojis
        case .salary:        return "💰"
        case .bonus:         return "🎉"
        case .interest:      return "📈"
        case .investment:    return "💹"
        case .gift:          return "🎁"
        case .freelance:     return "🧑‍💻"
            
        // Expense emojis
        case .groceries:     return "🛒"
        case .shopping:      return "🛍️"
        case .health:        return "🩺"
        case .education:     return "📚"
        case .transport:     return "🚗"
        case .bills:         return "💡"
        case .diningOut:     return "🍽️"
        case .entertainment: return "🎬"
        case .utilities:     return "🔧"
        case .fuel:          return "⛽"
        case .parking:       return "🅿️"
        case .travel:        return "✈️"
        case .coffee:        return "☕"
        case .pets:          return "🐾"
        case .charity:       return "❤️"
        }
    }
    
    var label: String {
        switch self {
        case .salary:        return "Salary"
        case .bonus:         return "Bonus"
        case .interest:      return "Interest"
        case .investment:    return "Investment"
        case .gift:          return "Gift"
        case .freelance:     return "Freelance"
            
        case .groceries:     return "Groceries"
        case .shopping:      return "Shopping"
        case .health:        return "Health"
        case .education:     return "Education"
        case .transport:     return "Transport"
        case .bills:         return "Bills"
        case .diningOut:     return "Dining Out"
        case .entertainment: return "Entertainment"
        case .utilities:     return "Utilities"
        case .fuel:          return "Fuel"
        case .parking:       return "Parking"
        case .travel:        return "Travel"
        case .coffee:        return "Coffee"
        case .pets:          return "Pets"
        case .charity:       return "Charity"
        }
    }
    
    var value: String {
        switch self {
        case .salary:        return "salary"
        case .bonus:         return "bonus"
        case .interest:      return "interest"
        case .investment:    return "investment"
        case .gift:          return "gift"
        case .freelance:     return "freelance"
            
        case .groceries:     return "groceries"
        case .shopping:      return "shopping"
        case .health:        return "health"
        case .education:     return "education"
        case .transport:     return "transport"
        case .bills:         return "bills"
        case .diningOut:     return "dining_out"
        case .entertainment: return "entertainment"
        case .utilities:     return "utilities"
        case .fuel:          return "fuel"
        case .parking:       return "parking"
        case .travel:        return "travel"
        case .coffee:        return "coffee"
        case .pets:          return "pets"
        case .charity:       return "charity"
        }
    }
}
