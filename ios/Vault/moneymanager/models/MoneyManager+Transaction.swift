//
//  Transaction.swift
//  Vault
//
//  Created by arga on 21/11/25.
//

import SwiftData
import Foundation




@Model class Transaction: Identifiable {
    var title: String
    var createdAt: Date
    var amount: Int64
    var category: Category
    var type: TransactionType
    
    init(title: String, createdAt: Date, amount: Int64, category: Category, type: TransactionType) {
        self.title = title
        self.createdAt = createdAt
        self.amount = amount
        self.category = category
        self.type = type
    }
}
