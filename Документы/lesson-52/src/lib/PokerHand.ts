import Card from './Card';

class PokerHand {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        if (this.isFlush()) {
            return 'Флэш';
        } else if (this.isThreeOfAKind()) {
            return 'Тройка';
        } else if (this.isTwoPairs()) {
            return 'Две пары';
        } else if (this.isOnePair()) {
            return 'Одна пара';
        } else {
            return 'Нет комбинации';
        }
    }

    private isFlush(): boolean {
        const firstSuit = this.cards[0].suit;
        return this.cards.every(card => card.suit === firstSuit);
    }

    private isThreeOfAKind(): boolean {
        const ranks = this.cards.map(card => card.rank);
        for (const rank of ranks) {
            if (ranks.filter(r => r === rank).length === 3) {
                return true;
            }
        }
        return false;
    }

    private isTwoPairs(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const uniqueRanks = Array.from(new Set(ranks));

        let pairsCount = 0;
        for (const rank of uniqueRanks) {
            if (ranks.filter(r => r === rank).length === 2) {
                pairsCount++;
            }
        }

        return pairsCount === 2;
    }

    private isOnePair(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const uniqueRanks = Array.from(new Set(ranks));

        for (const rank of uniqueRanks) {
            if (ranks.filter(r => r === rank).length === 2) {
                return true;
            }
        }
        return false;
    }
}

export default PokerHand;
