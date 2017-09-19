declare module "SSVTDataModel" {

export interface IModelCollection<TEntity> {
	Id: string;
	HRef: string;
	Status : CollectionStatus;
	Items: Array<TEntity>;
}

export interface IDictionary<TEntity> {
	[Key: string]: TEntity;
}

export enum CollectionStatus { None,
	Success,
	Error,
	Delay,
}

export interface IDataModel { Id: string; HRef: string;
	Publishers: IDictionary<IPublisher>;
	New: IModelCollection<string>;
}

export enum MatchStatus { None,
	Pending,
	Confirmed,
	OwnedNotSubmitted,
	IncorrectMatching,
}

export interface IPublisher { Id: string; HRef: string;
	PublisherName: string;
	Submissions: IModelCollection<ISubmission>;
}

export interface IRelationship { Id: string; HRef: string;
}

export interface ISubmission extends IRelationship {
	FriendlyName: string;
}

}
