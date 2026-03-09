class World {
    private nextId = 0;
    private components = new Map<string, Map<Entity, unknown>>();

    createEntity(): Entity {
        return this.nextId++;
    }

    addComponent<T>(entity: Entity, type: string, data: T): void {
        if (!this.components.has(type)){
            this.components.set(type, new Map());
        }
        this.components.get(type)!.set(entity, data);
    }

    getComponent<T>(entity: Entity, type: string): T | undefined {
        return this.components.get(type)?.get(entity) as T;
    }

    query(...types: string[]): Entity[] {
        const sets = types.map(t => new Set(this.components.get(t)?.keys() ?? []));
        return[...sets[0]].filter(e => sets.every(s => s.has(e)));
    }
}