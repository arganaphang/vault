//
//  MoneyManager+Transaction.swift
//  Vault
//
//  Created by arga on 21/11/25.

import SwiftData
import Foundation

@Model class MoneyManagerTransaction: Identifiable {
    @Attribute(.unique) var id: UUID
    var date: Date
    var amount: Double
    var note: String?
    // Backing raw value for MoneyManagerTransactionType enum
    var typeValue: String
    
    // Computed property for convenience
    var type: MoneyManagerTransactionType {
        get {
            MoneyManagerTransactionType(rawValue: typeValue) ?? .expense // fallback
        }
        set {
            typeValue = newValue.rawValue
        }
    }
    var categoryValue: String
    var category: MoneyManagerCategory {
        get {
            MoneyManagerCategory.allCases.first(where: { $0.value == categoryValue }) ?? .other
        }
        set {
            categoryValue = newValue.value
        }
    }
    
    init(
        id: UUID = UUID(),
        date: Date,
        amount: Double,
        category: MoneyManagerCategory,
        note: String? = nil,
        type: MoneyManagerTransactionType
    ) {
        self.id = id
        self.date = date
        self.amount = amount
        self.note = note
        self.categoryValue = category.value
        self.typeValue = type.rawValue
    }
}
