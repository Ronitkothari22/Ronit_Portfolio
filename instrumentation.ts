export async function register() {
  if (typeof window !== "undefined") return;

  const g = globalThis as Record<string, unknown>;
  const storage = g.localStorage as { getItem?: unknown; setItem?: unknown; removeItem?: unknown } | undefined;

  if (!storage || typeof storage.getItem !== "function") {
    const mem = new Map<string, string>();
    g.localStorage = {
      getItem(key: string) {
        return mem.has(key) ? mem.get(key)! : null;
      },
      setItem(key: string, value: string) {
        mem.set(key, String(value));
      },
      removeItem(key: string) {
        mem.delete(key);
      },
      clear() {
        mem.clear();
      },
      key(index: number) {
        return Array.from(mem.keys())[index] ?? null;
      },
      get length() {
        return mem.size;
      }
    };
  }
}
