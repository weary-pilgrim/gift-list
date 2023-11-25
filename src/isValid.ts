export const isValid = (...lists: string[][]) => {
    let expectedLength = null;
    for (const list of lists) {
      if (expectedLength === null) {
        expectedLength = list.length;
      }
      else if (list.length !== expectedLength) {
        return false
      }
    }

    if (!expectedLength) {
        return false;
    }

    for (let i = 0; i < expectedLength; i++) {
        const values = new Set<string>();
        for (const list of lists) {
            const value = list.at(i);

            if (!value) {
                return false;
            }

            if (values.has(value)) {
                return false;
            }

            values.add(value);
        }
    }

    return true;
}