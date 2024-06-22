class State {
    value: string;
    isOptionallyGreedy = false;
    constructor(value: string) {
        this.value = value;
    }
    canConsume(str: string, index: number): boolean {
        const isMatchedCharacter = str[index] === this.value;
        const isWildcardWithAvailableCharacters = this.value === '.' && index < str.length;
        if (!this.isOptionallyGreedy) {
            // cannot consume if already consumed and not greedy
            return isMatchedCharacter || isWildcardWithAvailableCharacters;
        }
        return isWildcardWithAvailableCharacters || isMatchedCharacter;
    }
}

const isRegexConsumed = (s: string, index: number, currentStateIndex: number, states: State[]) => {
    const isStringFullyConsumed = index === s.length;
    const areStatesFullyConsumed = currentStateIndex === states.length;
    const areRemainingStatesOptionallyGreedy = states.slice(currentStateIndex).every(state => state.isOptionallyGreedy);

    return (
        (isStringFullyConsumed && areStatesFullyConsumed) ||
        (isStringFullyConsumed && !areStatesFullyConsumed && areRemainingStatesOptionallyGreedy)
    );
};

const parseRegex = (regex: string): State[] => {
    const states = [];
    for (let index = 0; index < regex.length; index++) {
        const char = regex[index];
        if (char === '*') {
            states[states.length - 1].isOptionallyGreedy = true;
        } else {
            states.push(new State(char));
        }
    }
    return states;
};

const consumeForward = (
    s: string,
    stateIndex: number,
    stringIndex: number,
    states: State[]
): [number, number, boolean] => {
    // if stringIndex is length of string and stateIndex is length of states, we fully consumed the states and the string
    // so maximal happy path achieved. alternatively ifstringIndex is length of string and remaining states are all optional,
    // we consider it a happy path as well
    if (stringIndex === s.length) {
        return [
            stringIndex,
            stateIndex,
            stateIndex === states.length || states.slice(stateIndex).every(state => state.isOptionallyGreedy),
        ];
    }
    // if we haven't consumed the string but have consumed all our states, that's an unhappy path
    else if (stringIndex !== s.length && stateIndex === states.length) {
        return [stringIndex, stateIndex, false];
    }

    const currentState = states[stateIndex];

    if (!currentState.isOptionallyGreedy) {
        if (!currentState.canConsume(s, stringIndex)) {
            // if the current non-optional state cannot consume the current character, that's an unhappy path
            return [stringIndex, stateIndex, false];
        }
        // if we are not greedy and can consume, we consume the character and move forward a state
        return consumeForward(s, stateIndex + 1, stringIndex + 1, states);
    }
    // if we are greedy and cannot consume, then we can only skip ourselves and move forward a state
    else if (currentState.isOptionallyGreedy && !currentState.canConsume(s, stringIndex)) {
        return consumeForward(s, stateIndex + 1, stringIndex, states);
    }

    // if we are greedy and can consume, we need to consume step by step, trying to see how many we can consume while still
    // parsing safely, so we try consume 0 and 1 character, and see which branch gets us farther

    const [noConsumptionIndex, noConsumptionStateIndex, noConsumptionIsValid] = consumeForward(
        s,
        stateIndex + 1,
        stringIndex,
        states
    );
    const [consumptionIndex, consumptionStateIndex, consumptionIsValid] = consumeForward(
        s,
        stateIndex,
        stringIndex + 1,
        states
    );

    if (noConsumptionIsValid && consumptionIsValid) {
        // Prefer whichever got further in the string and in the states
        return [
            Math.max(consumptionIndex, noConsumptionIndex),
            Math.max(consumptionStateIndex, noConsumptionStateIndex),
            consumptionIsValid,
        ];
    } else if (noConsumptionIsValid) {
        return [noConsumptionIndex, noConsumptionStateIndex, noConsumptionIsValid];
    } else if (consumptionIsValid) {
        return [consumptionIndex, consumptionStateIndex, consumptionIsValid];
    } else {
        // if nothing is valid, then give up
        return [stringIndex, stateIndex, false];
    }
};

function isMatch(s: string, p: string): boolean {
    const states = parseRegex(p);
    const [index, currentStateIndex] = consumeForward(s, 0, 0, states);
    return isRegexConsumed(s, index, currentStateIndex, states);
}

export { isMatch };
