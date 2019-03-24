import * as Class from '@singleware/class';
import * as Mapping from '@singleware/mapping';
/**
 * Filters helper class.
 */
export declare class Filters extends Class.Null {
    /**
     * Gets a new real level entity based on the specified column.
     * @param column Level column schema.
     * @param levels Level list.
     * @returns Returns the generated level entity.
     */
    private static getRealLevel;
    /**
     * Gets a new virtual level entity based on the specified column.
     * @param column Level column schema.
     * @param levels Level list.
     * @returns Returns the level entity.
     */
    private static getVirtualLevel;
    /**
     * Builds and get a new grouping entity based on the specified model type and view modes.
     * @param model Model type.
     * @param views Views modes.
     * @param path Path to determine whether this group is a subgroup.
     * @returns Returns the generated group.
     */
    private static getGrouping;
    /**
     * Builds and get a new sorting entity based on the specified sorting map.
     * @param sort Sorting map.
     * @returns Returns the generated sorting.
     */
    private static getSorting;
    /**
     * Gets a new compound Id based on the specified id and the list of levels.
     * @param id Main id field.
     * @param levels List of levels.
     * @returns Returns the composed id object.
     */
    private static getComposedId;
    /**
     * Decompose all groups in the specified list of levels to the given pipeline.
     * @param pipeline Current pipeline.
     * @param levels List of levels.
     * @returns Returns the list of decomposed levels.
     */
    private static decomposeAll;
    /**
     * Compose a subgroup to the given pipeline.
     * @param pipeline Current pipeline.
     * @param group Parent group.
     * @param views Current view modes.
     * @param level Current level.
     * @param last Last level.
     */
    private static composeSubgroup;
    /**
     * Compose a group into the pipeline.
     * @param pipeline Current pipeline.
     * @param group Current group.
     * @param level Current level.
     */
    private static composeGroup;
    /**
     * Compose all decomposed levels to the given pipeline.
     * @param pipeline Current pipeline.
     * @param fields List of fields.
     * @param views View modes.
     * @param level First decomposed level.
     * @param multiples List of decomposed levels.
     */
    private static composeAll;
    /**
     * Resolve any foreign relationship in the given model type to the specified pipeline.
     * @param pipeline Current pipeline.
     * @param project Current projection.
     * @param base Base model type.
     * @param model Current model type.
     * @param views View mode.
     * @param levels List of current levels.
     */
    private static resolveForeignRelation;
    /**
     * Resolve any nested relationship in the given model type to the specified pipeline.
     * @param pipeline Current pipeline.
     * @param project Current projection.
     * @param base Base model type.
     * @param model Current model type.
     * @param views View modes.
     * @param levels List of current levels.
     */
    private static resolveNestedRelations;
    /**
     * Applies any relationship in the given model type into the specified pipeline.
     * @param pipeline Current pipeline.
     * @param base Base model type.
     * @param model Current model type.
     * @param views View modes.
     * @param levels List of current levels.
     * @returns Returns the pipeline projection.
     */
    private static applyRelationship;
    /**
     * Builds and get the primary id filter based on the specified model type.
     * @param model Model type.
     * @param value Primary id value.
     * @returns Returns the primary filter.
     */
    static getPrimaryIdMatch(model: Mapping.Types.Model, value: any): Mapping.Statements.Match;
    /**
     * Builds and get the filter pipeline based on the specified model type, view modes and filter.
     * @param model Model type.
     * @param views View modes.
     * @param filter Fields filter.
     * @returns Returns the filter pipeline.
     */
    static getPipeline(model: Mapping.Types.Model, views: string[], filter?: Mapping.Statements.Filter): Mapping.Types.Entity[];
}
