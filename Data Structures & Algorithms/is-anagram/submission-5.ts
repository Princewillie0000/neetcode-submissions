class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const map = new Map<string, number>()
        for (let i of s){
            if(map.has(i)){
                const count = map.get(i)
                map.set(i, count! + 1)
            } else {
                map.set(i, 1)
            }
        }

        for (let o of t){
            const count = map.get(o)
                if (count === undefined || count === 0){
                    return false 
                } else {
                    map.set(o, count! - 1)
                }
        }
        return true
    }
}
